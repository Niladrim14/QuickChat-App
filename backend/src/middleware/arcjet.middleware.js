import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";
import express from "express";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);
    // Check if the request is denied(with types)
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ message: "Too many requests - Rate limit exceeded" });
      } else if (decision.reason.isBot()) {
        return res
          .status(403)
          .json({ message: "Access denied - Bot detected" });
      } else {
        return res
          .status(403)
          .json({ message: "Access denied by Security Policy" });
      }
    }
    // Additional spoofed bot check
    if (decision.results.some(isSpoofedBot)) {
      return res
        .status(403)
        .json({ message: "Access denied - Spoofed Bot detected" });
    }
    // If allowed, proceed to next middleware
    next();
  } catch (error) {
    console.log("Arcjet Protection error :", error);
    next();
  }
};
