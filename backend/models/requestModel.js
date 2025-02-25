const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming there's a User model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    recipients: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Assuming there's a User model
          required: true,
        },
        signed: {
          type: Boolean,
          default: false,
        },
        signaturePositions: [
          {
            page: { type: Number, required: true }, // PDF Page Number
            x: { type: Number, required: true }, // X-coordinate
            y: { type: Number, required: true }, // Y-coordinate
          },
        ],
      },
    ],
    emailSubject: {
      type: String,
      required: true,
      trim: true,
    },
    emailMessage: {
      type: String,
      required: true,
      trim: true,
    },
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
      required: true,
    },
    pdfVersions: [
      {
        version: { type: Number, required: true },
        filePath: { type: String, required: true },
        signedBy: {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          signedAt: { type: Date, default: Date.now },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
