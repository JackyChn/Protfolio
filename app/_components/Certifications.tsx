import React from "react";
import Certificate from "./ui/Certificate";

export default function Certifications() {
  return (
    <div className="py-20 w-full" id="certifications">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center">
        <Certificate
          title={"AWS Certified Cloud Practitioner"}
          description={"Basic certificate of AWS Cloud"}
          image={"/cp-2.png"}
          hasValidationNumber="1"
          validationNumber={"68643be5e562406382d69e1d6594b669"}
          link={"https://aws.amazon.com/verification"}
        />
        <Certificate
          title={"AWS Certified Developer - Associate"}
          description={"AWS Developer Associate"}
          image={"/da.png"}
          hasValidationNumber="1"
          validationNumber={"b8d1931c49c842c2a78195a7d75f631c"}
          link={"https://aws.amazon.com/verification"}
        />
        <Certificate
          title={"AWS Certified Solutions Architect - Associate"}
          description={"AWS Associate Solutions Architect"}
          image={"/saa.png"}
          hasValidationNumber="1"
          validationNumber={"7ab876b39a4f4c17b32679709dd85879"}
          link={"https://aws.amazon.com/verification"}
        />
        <Certificate
          title={"AWS Certified Developer - Associate"}
          description={"AWS Developer Associate"}
          image={"/ui.png"}
          hasValidationNumber="0"
          validationNumber={"Go Check->"}
          link={
            "https://credentials.uipath.com/030dfdd5-0282-455b-b7b8-baa6a47d36bb#acc.ngsuVqOZ"
          }
        />
      </div>
    </div>
  );
}
