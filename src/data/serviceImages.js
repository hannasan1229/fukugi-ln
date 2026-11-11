// src/data/serviceImages.js

import meetingImg from "@/assets/images/img-meeting.jpg";
import fairImg from "@/assets/images/img-fair.jpg";
import trainingImg from "@/assets/images/img-training.jpg";

import officeImg from "@/assets/images/img-office.jpg";
import medicalImg from "@/assets/images/img-medical.jpg";
import shoppingImg from "@/assets/images/img-shopping.jpg";

// 🔥 NEU
import batteryImg from "@/assets/images/img-batterydata.jpg";
import powderImg from "@/assets/images/img-powder.jpg";
import chemistryImg from "@/assets/images/img-chemistry.jpg";

import batteryPlot from "@/assets/plots/battery-curve.svg";
import materialPlot from "@/assets/plots/peak-analysis.svg";
import physicsPlot from "@/assets/plots/material-curve.svg";


export const serviceImages = {
  business: {
    meeting: meetingImg,
    fair: fairImg,
    training: trainingImg,
  },
  private: {
    office: officeImg,
    medical: medicalImg,
    shopping: shoppingImg,
  },

  // 🔥 NEU
  technical: {
    battery: batteryImg,
    powder: powderImg,
    chemistry: chemistryImg,

    batteryExample: batteryPlot,
    powderExample: materialPlot,
    chemistryExample: physicsPlot,
  },

};