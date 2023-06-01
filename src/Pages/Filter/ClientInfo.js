import React from "react";
import html2pdf from "html2pdf.js";

const ClientInfo = ({ clientInfo }) => {
  const {
    _id,
    name,
    age,
    gender,
    category,
    department,
    id,
    presentAddress,
    permanentAddress,
    contact,
    email,
    uniqueID,
    sibling,
    birthOrder,
    parentInfo,
    pastHistory,
    familyHistory,
    medicalHistory,
    suicidalHistory,
    presentingSymptoms,
    ConditionIdentifiedDiagnosis,
    Assessment,
    treatmentPlan,
    presentingIssues,
    sessionTreatment,
    progressNote,
    followupDate,
    refName,
    refGender,
    refCategory,
    refDepartment,
    refID,
    refReason,
  } = clientInfo;

  const handleDownloadPDF = () => {
    const element = document.getElementById("divToDownload");
    const opt = {
      margin: 0.5,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      {name && name.length ? (
        <div>
          <div id="divToDownload">
            <h1 className="text-2xl text-center font-bold">{name}'s Record</h1>
            <div className="my-5">
              <span className="text-xl font-semibold">Age: </span>
              <span className="text-xl">{age}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Gender: </span>
              <span className="text-xl">{gender}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Category: </span>
              <span className="text-xl">{category}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Department: </span>
              <span className="text-xl">{department}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">ID: </span>
              <span className="text-xl">{id}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Present Address: </span>
              <span className="text-xl">{presentAddress}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Permanent Address: </span>
              <span className="text-xl">{permanentAddress}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Contact Number: </span>
              <span className="text-xl">{contact}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Email: </span>
              <span className="text-xl">{email}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Unique ID: </span>
              <span className="text-xl">{uniqueID}</span>
            </div>
            <hr className="border-4 border-solid border-slate-100 my-5" />
            <div className="my-5">
              <span className="text-xl font-semibold">
                Number of Siblings:{" "}
              </span>
              <span className="text-xl">{sibling}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Birth Order: </span>
              <span className="text-xl">{birthOrder}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Parents Information:{" "}
              </span>
              <span className="text-xl">{parentInfo}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Past History of Psychological Condition:{" "}
              </span>
              <span className="text-xl">{pastHistory}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Family history of Psychological Condition:{" "}
              </span>
              <span className="text-xl">{familyHistory}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Medical history: </span>
              <span className="text-xl">{medicalHistory}</span>
            </div>
            <hr className="border-4 border-solid border-slate-100 my-5" />
            <div className="my-5">
              <span className="text-xl font-semibold">
                Self Harm/Suicidal History:{" "}
              </span>
              <span className="text-xl">{suicidalHistory}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Presenting Symptoms:{" "}
              </span>
              <span className="text-xl">{presentingSymptoms}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Condition Identified/Diagnosis:{" "}
              </span>
              <span className="text-xl">{ConditionIdentifiedDiagnosis}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Assessment: </span>
              <span className="text-xl">{Assessment}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Treatment Plan: </span>
              <span className="text-xl">{treatmentPlan}</span>
            </div>
            <hr className="border-4 border-solid border-slate-100 my-5" />
            <div className="my-5">
              <span className="text-xl font-semibold">
                Presenting Issues for the session:{" "}
              </span>
              <span className="text-xl">{presentingIssues}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Session Treatment plan:{" "}
              </span>
              <span className="text-xl">{sessionTreatment}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Progress note: </span>
              <span className="text-xl">{progressNote}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Next date of follow up:{" "}
              </span>
              <span className="text-xl">{followupDate}</span>
            </div>
            <hr className="border-4 border-solid border-slate-100 my-5" />
            <h2 className="text-2xl font-semibold">For Referring:</h2>
            <div className="my-5">
              <span className="text-xl font-semibold">Name: </span>
              <span className="text-xl">{refName}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Gender: </span>
              <span className="text-xl">{refGender}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Category: </span>
              <span className="text-xl">{refCategory}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">Department: </span>
              <span className="text-xl">{refDepartment}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">ID: </span>
              <span className="text-xl">{refID}</span>
            </div>
            <div className="my-5">
              <span className="text-xl font-semibold">
                Reason of Referral:{" "}
              </span>
              <span className="text-xl">{refReason}</span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-bold">No data to show</h1>
      )}
    </div>
  );
};

export default ClientInfo;
