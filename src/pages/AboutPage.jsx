import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <div className="md:w-100 space-y-2">
        <p>
          A tool designed for business to analyze customer reviews and gain
          insights into customer sentiment and areas for improvement.
        </p>
        <p>
          It uses Gemini API to convert raw reviews and uses AI to analyze their
          meaning, sentiment and other relevant information which is compiled
          automatically into Google Sheets for better viewability and
          readability.
        </p>
      </div>
      <p>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeftIcon /> Back to Home
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default AboutPage;
