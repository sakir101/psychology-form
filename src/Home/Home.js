import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://client-form-server.vercel.app/clientData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Data Saved Successfully");
        }
        reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-[800px] shadow-2xl bg-base-100">
          <div class="card-body ">
            <h1 className="text-3xl text-center font-bold">Client Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  class="input input-bordered"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Age</span>
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="25"
                  class="input input-bordered"
                  {...register("age", {
                    required: "Age is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Gender</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Department</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("department", {
                    required: "Department is required",
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">ID</span>
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="10"
                  class="input input-bordered"
                  {...register("id", {
                    required: "ID is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Present Address</span>
                </label>
                <input
                  type="text"
                  placeholder="9/1 Avenue"
                  class="input input-bordered"
                  {...register("presentAddress", {
                    required: "Present Address is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Permanent Address</span>
                </label>
                <input
                  type="text"
                  placeholder="9/1 Avenue"
                  class="input input-bordered"
                  {...register("permanentAddress", {
                    required: "Permanent Address is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Contact Number</span>
                </label>
                <input
                  type="text"
                  placeholder="+8801776237673"
                  class="input input-bordered"
                  {...register("contact", {
                    required: "Contact Information is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="doe@gmail.com"
                  class="input input-bordered"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Unique ID</span>
                </label>
                <input
                  type="text"
                  placeholder="456"
                  class="input input-bordered"
                  {...register("uniqueID", {
                    required: "Unique ID is required",
                  })}
                />
              </div>
              <hr className="border-4 border-solid border-slate-100 my-5" />
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Number of Siblings</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  class="input input-bordered"
                  {...register("sibling", {
                    required: "Sibling Number Selection is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Birth Order</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  class="input input-bordered"
                  {...register("birthOrder", {
                    required: "Birth Order Selection is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Parent Information</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Parent Information"
                  class="textarea textarea-bordered"
                  {...register("parentInfo", {
                    required: "Parent Information is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    Past History of Psychological Condition
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Past History of Psychological Condition"
                  class="textarea textarea-bordered"
                  {...register("pastHistory", {
                    required:
                      "Past History of Psychological Condition is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    Family history of Psychological Condition
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Family history of Psychological Condition"
                  class="textarea textarea-bordered"
                  {...register("familyHistory", {
                    required:
                      "Family history of Psychological Condition is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Medical history</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Medical history"
                  class="textarea textarea-bordered"
                  {...register("medicalHistory", {
                    required: "Medical history is required",
                  })}
                />
              </div>
              <hr className="border-4 border-solid border-slate-100 my-5" />
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Self Harm/Suicidal History</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Self Harm/Suicidal History"
                  class="textarea textarea-bordered"
                  {...register("suicidalHistory", {
                    required: "Self Harm/Suicidal History is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Presenting Symptoms</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Presenting Symptoms"
                  class="textarea textarea-bordered"
                  {...register("presentingSymptoms", {
                    required: "Presenting Symptoms is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Condition Identified/Diagnosis</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Condition Identified/Diagnosis"
                  class="textarea textarea-bordered"
                  {...register("ConditionIdentifiedDiagnosis", {
                    required: "Condition Identified/Diagnosis is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Assessment</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Assessment"
                  class="textarea textarea-bordered"
                  {...register("Assessment", {
                    required: "assessment is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Treatment Plan</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Treatment Plan"
                  class="textarea textarea-bordered"
                  {...register("treatmentPlan", {
                    required: "Treatment Plan is required",
                  })}
                />
              </div>
              <hr className="border-4 border-solid border-slate-100 my-5" />
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    Presenting Issues for the session
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Presenting Issues for the session"
                  class="textarea textarea-bordered"
                  {...register("presentingIssues", {
                    required: "Presenting Issues for the session is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Session Treatment plan</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Session Treatment plan"
                  class="textarea textarea-bordered"
                  {...register("sessionTreatment", {
                    required: "Session Treatment plan is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Progress note</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Progress note"
                  class="textarea textarea-bordered"
                  {...register("progressNote", {
                    required: "Progress note is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Next date of follow up</span>
                </label>
                <input
                  type="date"
                  placeholder="Progress note"
                  class="input input-bordered"
                  {...register("followupDate", {
                    required: "Follow up Date is required",
                  })}
                />
              </div>
              <hr className="border-4 border-solid border-slate-100 my-5" />
              <h3 className="text-2xl font-semibold">For Referring</h3>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Progress note"
                  class="input input-bordered"
                  {...register("refName", {
                    required: "Reference Name is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Gender</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("refGender", {
                    required: "Reference Gender is required",
                  })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("refCategory", {
                    required: "Reference Category is required",
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Department</span>
                </label>
                <select
                  class="input input-bordered"
                  {...register("refDepartment", {
                    required: "Reference Department is required",
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">ID</span>
                </label>
                <input
                  type="text"
                  placeholder="Progress note"
                  class="input input-bordered"
                  {...register("refID", {
                    required: "Reference ID is required",
                  })}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Reason of Referral</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Progress note"
                  class="textarea textarea-bordered"
                  {...register("refReason", {
                    required: "Reference Reason is required",
                  })}
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Save Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
