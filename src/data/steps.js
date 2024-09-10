import { reactive } from "vue"

const steps = reactive([
    {
        "id": "step1",
        "number": "1",
        "title": "Personal Information",
        "buttonLabel": "Next",
        "fields": [
            {
                "label": "First Name",
                "type": "text",
                "placeholder": "Enter your first name",
                "key": "firstName",
                "value":""
            },
            {
                "label": "Last Name",
                "type": "text",
                "placeholder": "Enter your last name",
                "key": "lastName",
                "value": ""
            },
            {
                "label": "Date of Birth",
                "type": "date",
                "key": "dateOfBirth",
                "value": ""
            },
            {
                "label": "Email",
                "type": "email",
                "placeholder": "Enter your email address",
                "key": "email",
                "value": ""
            },
            {
                "label": "Phone Number",
                "type": "tel",
                "placeholder": "Enter your phone number",
                "key": "phoneNumber",
                "value": ""
            }
        ]
    },
    {
        "id": "step2",
        "number": "2",
        "title": "Education Details",
        "buttonLabel": "Next",
        "fields": [
            {
                "label": "Graduated School",
                "type": "text",
                "placeholder": "Enter the name of the school you graduated from",
                "key": "graduatedSchool",
                "value": ""
            },
            {
                "label": "Major",
                "type": "text",
                "placeholder": "Enter your major",
                "key": "major",
                "value": ""
            },
            {
                "label": "Graduation Date",
                "type": "date",
                "key": "graduationDate",
                "value": ""
            },
            {
                "label": "Degree",
                "type": "text",
                "placeholder": "Enter your degree (e.g. Bachelor's, Master's)",
                "key": "Degree",
                "value": ""
            }
        ]
    },
    {
        "id": "step3",
        "number": "3",
        "title": "Work Experience",
        "buttonLabel": "Complete",
        "fields": [
            {
                "label": "Last Company",
                "type": "text",
                "placeholder": "Enter the name of your last company",
                "key": "lastCompany",
                "value": ""
            },
            {
                "label": "Position",
                "type": "text",
                "placeholder": "Enter your position at the company",
                "key": "position",
                "value": ""
            },
            {
                "label": "Duration of Employment",
                "type": "text",
                "placeholder": "How long did you work there?",
                "key": "durationOfEmployment",
                "value": ""
            },
            {
                "label": "Responsibilities",
                "type": "textarea",
                "placeholder": "Describe your responsibilities and duties in this role",
                "key": "responsibilities",
                "value": ""
            }
        ]
    }
])

export default steps