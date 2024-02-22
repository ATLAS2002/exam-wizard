import { DataTable } from "~/components/role-data/data-table";
import { type RoleProps, roleColumns } from "~/components/role-data/columns";
import { RoleDataProvider } from "~/context/RoleDataProvider";
import { Header } from "~/components/role-data/header";

const roleData: RoleProps[] = [
  {
    name: {
      title: "Principal",
    },
    permissions: [
      "CREATE_ROLES",
      "ASSIGN_ROLES",
      "EDIT_ROLES",
      "VIEW_FINANCIALS",
      "APPROVE_BUDGETS",
    ],
    assignees: [{ name: "Dr. Sarah Jones" }],
  },
  {
    name: {
      title: "Head of Department",
      description:
        "Leads a specific academic department, manages curriculum, faculty, and student learning within their department.",
    },
    permissions: [
      "ADD_STUDENTS",
      "CONDUCT_EXAMS",
      "VIEW_STUDENT_RECORDS",
      "APPROVE_LEAVE_REQUESTS",
    ],
    assignees: [{ name: "Mr. David Miller" }, { name: "Ms. Emily Brown" }],
  },
  {
    name: {
      title: "Teacher",
      description:
        "Delivers classroom instruction, assesses student learning, and provides academic guidance to students.",
    },
    permissions: [
      "VIEW_STUDENT_RECORDS",
      "ASSIGN_GRADES",
      "SEND_PARENT_NOTIFICATIONS",
      "REQUEST_RESOURCES",
    ],
    assignees: [
      { name: "Ms. Jessica Anderson" },
      { name: "Mr. Daniel Lee" },
      { name: "Mrs. Emily Jones" },
    ],
  },
  {
    name: {
      title: "Librarian",
      description:
        "Manages the school library, maintains resources, assists students with research, and promotes reading initiatives.",
    },
    permissions: [
      "MANAGE_LIBRARY_RESOURCES",
      "ISSUE_LIBRARY_BOOKS",
      "VIEW_STUDENT_READING_HISTORY",
      "ORGANIZE_EVENTS",
    ],
    assignees: [
      { name: "Ms. Elizabeth Taylor" },
      { name: "Mr. Charles Williams" },
    ],
  },
  {
    name: {
      title: "Head of Department",
      description:
        "Leads a specific academic department, manages curriculum, faculty, and student learning within their department.",
    },
    permissions: [
      "ADD_STUDENTS",
      "CONDUCT_EXAMS",
      "VIEW_STUDENT_RECORDS",
      "APPROVE_LEAVE_REQUESTS",
    ],
    assignees: [{ name: "Mr. David Miller" }, { name: "Ms. Emily Brown" }],
  },
  {
    name: {
      title: "Teacher",
      description:
        "Delivers classroom instruction, assesses student learning, and provides academic guidance to students.",
    },
    permissions: [
      "VIEW_STUDENT_RECORDS",
      "ASSIGN_GRADES",
      "SEND_PARENT_NOTIFICATIONS",
      "REQUEST_RESOURCES",
    ],
    assignees: [
      { name: "Ms. Jessica Anderson" },
      { name: "Mr. Daniel Lee" },
      { name: "Mrs. Emily Jones" },
      { name: "Mr. Daniel Lee" },
      { name: "Mrs. Emily Jones" },
    ],
  },
  {
    name: {
      title: "Librarian",
      description:
        "Manages the school library, maintains resources, assists students with research, and promotes reading initiatives.",
    },
    permissions: [
      "MANAGE_LIBRARY_RESOURCES",
      "ISSUE_LIBRARY_BOOKS",
      "VIEW_STUDENT_READING_HISTORY",
      "ORGANIZE_EVENTS",
    ],
    assignees: [
      { name: "Ms. Elizabeth Taylor" },
      { name: "Mr. Charles Williams" },
    ],
  },
  {
    name: {
      title: "School Counselor",
      description:
        "Provides academic, social, and emotional support to students, assists with individual needs and career counseling.",
    },
    permissions: [
      "VIEW_STUDENT_ records",
      "SCHEDULE_MEETINGS",
      "REFER_STUDENTS_TO_SERVICES",
      "MAINTAIN_CONFIDENTIALITY",
    ],
    assignees: [{ name: "Mrs. Helen Smith" }, { name: "Mr. Michael Thomas" }],
  },
  {
    name: {
      title: "IT Administrator",
      description:
        "Maintains and supports school technology infrastructure, provides technical assistance to staff and students.",
    },
    permissions: [
      "MANAGE_IT_INFRASTRUCTURE",
      "GRANT_USER_ACCESS",
      "TROUBLESHOOT_TECHNICAL_ISSUES",
      "UPDATE_SOFTWARE",
    ],
    assignees: [{ name: "Mr. Robert Garcia" }, { name: "Ms. Angela Lopez" }],
  },
  {
    name: {
      title: "Head of Department",
      description:
        "Leads a specific academic department, manages curriculum, faculty, and student learning within their department.",
    },
    permissions: [
      "ADD_STUDENTS",
      "CONDUCT_EXAMS",
      "VIEW_STUDENT_RECORDS",
      "APPROVE_LEAVE_REQUESTS",
    ],
    assignees: [{ name: "Mr. David Miller" }, { name: "Ms. Emily Brown" }],
  },
  {
    name: {
      title: "Teacher",
      description:
        "Delivers classroom instruction, assesses student learning, and provides academic guidance to students.",
    },
    permissions: [
      "VIEW_STUDENT_RECORDS",
      "ASSIGN_GRADES",
      "SEND_PARENT_NOTIFICATIONS",
      "REQUEST_RESOURCES",
    ],
    assignees: [
      { name: "Ms. Jessica Anderson" },
      { name: "Mr. Daniel Lee" },
      { name: "Mrs. Emily Jones" },
    ],
  },
  {
    name: {
      title: "Librarian",
      description:
        "Manages the school library, maintains resources, assists students with research, and promotes reading initiatives.",
    },
    permissions: [
      "MANAGE_LIBRARY_RESOURCES",
      "ISSUE_LIBRARY_BOOKS",
      "VIEW_STUDENT_READING_HISTORY",
      "ORGANIZE_EVENTS",
    ],
    assignees: [
      { name: "Ms. Elizabeth Taylor" },
      { name: "Mr. Charles Williams" },
    ],
  },
  {
    name: {
      title: "School Counselor",
      description:
        "Provides academic, social, and emotional support to students, assists with individual needs and career counseling.",
    },
    permissions: [
      "VIEW_STUDENT_ records",
      "SCHEDULE_MEETINGS",
      "REFER_STUDENTS_TO_SERVICES",
      "MAINTAIN_CONFIDENTIALITY",
    ],
    assignees: [{ name: "Mrs. Helen Smith" }, { name: "Mr. Michael Thomas" }],
  },
  {
    name: {
      title: "IT Administrator",
      description:
        "Maintains and supports school technology infrastructure, provides technical assistance to staff and students.",
    },
    permissions: [
      "MANAGE_IT_INFRASTRUCTURE",
      "GRANT_USER_ACCESS",
      "TROUBLESHOOT_TECHNICAL_ISSUES",
      "UPDATE_SOFTWARE",
    ],
    assignees: [{ name: "Mr. Robert Garcia" }, { name: "Ms. Angela Lopez" }],
  },
  {
    name: {
      title: "Head of Department",
      description:
        "Leads a specific academic department, manages curriculum, faculty, and student learning within their department.",
    },
    permissions: [
      "ADD_STUDENTS",
      "CONDUCT_EXAMS",
      "VIEW_STUDENT_RECORDS",
      "APPROVE_LEAVE_REQUESTS",
    ],
    assignees: [{ name: "Mr. David Miller" }, { name: "Ms. Emily Brown" }],
  },
  {
    name: {
      title: "Teacher",
      description:
        "Delivers classroom instruction, assesses student learning, and provides academic guidance to students.",
    },
    permissions: [
      "VIEW_STUDENT_RECORDS",
      "ASSIGN_GRADES",
      "SEND_PARENT_NOTIFICATIONS",
      "REQUEST_RESOURCES",
    ],
    assignees: [
      { name: "Ms. Jessica Anderson" },
      { name: "Mr. Daniel Lee" },
      { name: "Mrs. Emily Jones" },
    ],
  },
  {
    name: {
      title: "Librarian",
      description:
        "Manages the school library, maintains resources, assists students with research, and promotes reading initiatives.",
    },
    permissions: [
      "MANAGE_LIBRARY_RESOURCES",
      "ISSUE_LIBRARY_BOOKS",
      "VIEW_STUDENT_READING_HISTORY",
      "ORGANIZE_EVENTS",
    ],
    assignees: [
      { name: "Ms. Elizabeth Taylor" },
      { name: "Mr. Charles Williams" },
    ],
  },
  {
    name: {
      title: "School Counselor",
      description:
        "Provides academic, social, and emotional support to students, assists with individual needs and career counseling.",
    },
    permissions: [
      "VIEW_STUDENT_ records",
      "SCHEDULE_MEETINGS",
      "REFER_STUDENTS_TO_SERVICES",
      "MAINTAIN_CONFIDENTIALITY",
    ],
    assignees: [{ name: "Mrs. Helen Smith" }, { name: "Mr. Michael Thomas" }],
  },
  {
    name: {
      title: "IT Administrator",
      description:
        "Maintains and supports school technology infrastructure, provides technical assistance to staff and students.",
    },
    permissions: [
      "MANAGE_IT_INFRASTRUCTURE",
      "GRANT_USER_ACCESS",
      "TROUBLESHOOT_TECHNICAL_ISSUES",
      "UPDATE_SOFTWARE",
    ],
    assignees: [{ name: "Mr. Robert Garcia" }, { name: "Ms. Angela Lopez" }],
  },
];

export default function Roles() {
  return (
    <RoleDataProvider>
      <main className="relative h-[calc(100%-40px)]">
        <div className="absolute h-16 w-full">
          <Header />
        </div>
        <div className="h-full pt-16">
          <DataTable columns={roleColumns} data={roleData} />
        </div>
      </main>
    </RoleDataProvider>
  );
}
