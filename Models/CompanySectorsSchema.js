const mongoose = require("mongoose");

const CompanySectorsSchema = new mongoose.Schema({
  root: [
    {
      type: String,
      required: true,
    },
  ],
  Manufacturing: [
    {
      type: String,
      required: true,
    },
  ],
  Other: [
    {
      type: String,
      required: true,
    },
  ],
  Service: [
    {
      type: String,
      required: true,
    },
  ],
  Food_and_Beverage: [
    {
      type: String,
      required: true,
    },
  ],
  Furniture: [
    {
      type: String,
      required: true,
    },
  ],
  Machinery: [
    {
      type: String,
      required: true,
    },
  ],
  Metalworking: [
    {
      type: String,
      required: true,
    },
  ],
  Plastic_and_Rubber: [
    {
      type: String,
      required: true,
    },
  ],
  Printing: [
    {
      type: String,
      required: true,
    },
  ],
  Textile_and_Clothing: [
    {
      type: String,
      required: true,
    },
  ],
  Machinery: [
    {
      type: String,
      required: true,
    },
  ],
  Wood: [
    {
      type: String,
      required: true,
    },
  ],
  Information_Technology_and_Telecommunications: [
    {
      type: String,
      required: true,
    },
  ],
  Transport_and_Logistics: [
    {
      type: String,
      required: true,
    },
  ],
  Maritime: [
    {
      type: String,
      required: true,
    },
  ],
  Plastic_processing_technology: [
    {
      type: String,
      required: true,
    },
  ],
  Metal_works: [
    {
      type: String,
      required: true,
    },
  ],
});

const CompanySectors = mongoose.model("COMPANYSECTORS", CompanySectorsSchema);
module.exports = CompanySectors;
