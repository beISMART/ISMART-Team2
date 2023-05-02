create sequence "public"."admin_id_seq";

create sequence "public"."branch_branch_code_seq";

create sequence "public"."exam_schedule_exam_ID_seq";

create sequence "public"."semester_sem_id_seq";

create sequence "public"."staff_id_seq";

create sequence "public"."student_id_seq";

create sequence "public"."subject_sub_code_seq";

create table "public"."CIE_marks" (
    "cie_id" uuid not null,
    "subject_marks" integer not null,
    "CIE_total" integer not null,
    "staffId" integer not null,
    "adminId" integer not null
);


create table "public"."academic_year" (
    "ID" uuid not null,
    "year_number" integer not null
);


create table "public"."admin" (
    "id" integer not null default nextval('admin_id_seq'::regclass),
    "admin_id" text not null,
    "first_name" text not null,
    "last_name" text not null,
    "full_name" text not null,
    "email" text not null,
    "address" character varying(250) not null,
    "gender" text not null,
    "contact_number" text not null,
    "state" text not null,
    "city" text not null,
    "password" character varying(20) not null,
    "admin_qualification" character varying(250) not null
);


create table "public"."assignments" (
    "assignment_id" uuid not null,
    "title" text not null,
    "description" text not null,
    "deadline" timestamp(3) without time zone not null,
    "submit_assignment" text not null,
    "studentId" integer not null,
    "staffId" integer not null,
    "branchBranch_code" integer not null,
    "subjectSub_code" integer not null
);


create table "public"."attendance" (
    "attendance_id" uuid not null,
    "status" boolean not null default false,
    "Date" timestamp(3) without time zone not null default now(),
    "staffId" integer not null,
    "adminId" integer not null,
    "subjectSub_code" integer not null
);


create table "public"."branch" (
    "branch_code" integer not null default nextval('branch_branch_code_seq'::regclass),
    "banch_name" text not null,
    "academic_yearID" uuid not null
);


create table "public"."exam_schedule" (
    "exam_ID" integer not null default nextval('"exam_schedule_exam_ID_seq"'::regclass),
    "exam_at" timestamp(3) without time zone not null,
    "adminId" integer not null,
    "subjectSub_code" integer not null
);


create table "public"."girevence_redressal" (
    "GR_id" uuid not null,
    "Date" timestamp(3) without time zone not null default now(),
    "issue_details" character varying(250) not null,
    "status" text not null,
    "student_name" text not null,
    "admin_name" text not null
);


create table "public"."monthly_report" (
    "monthly_repo_id" uuid not null,
    "Month" timestamp(3) without time zone not null,
    "Subject_percentage" text not null,
    "adminId" integer not null,
    "subjectSub_code" integer not null
);


create table "public"."notes" (
    "notes_id" uuid not null,
    "title" text not null,
    "content" text not null,
    "pdf" text not null,
    "studentId" integer not null,
    "staffId" integer not null,
    "branchBranch_code" integer not null,
    "subjectSub_code" integer not null,
    "semesterSem_id" integer not null
);


create table "public"."see_marks" (
    "see_id" uuid not null,
    "CIE_total" integer not null,
    "SEE_total" integer not null,
    "Grand_total" integer not null,
    "staffId" integer not null,
    "adminId" integer not null
);


create table "public"."semester" (
    "sem_id" integer not null default nextval('semester_sem_id_seq'::regclass),
    "sem_number" integer not null,
    "branchBranch_code" integer not null
);


create table "public"."staff" (
    "id" integer not null default nextval('staff_id_seq'::regclass),
    "staff_id" text not null,
    "first_name" text not null,
    "last_name" text not null,
    "full_name" text not null,
    "email" text not null,
    "address" character varying(250) not null,
    "gender" text not null,
    "contact_number" text not null,
    "city" text not null,
    "state" text not null,
    "password" character varying(20) not null,
    "staff_qualification" text not null,
    "staff_remarksRemarks_ID" uuid not null,
    "academic_yearID" uuid not null,
    "branchBranch_code" integer not null,
    "semesterSem_id" integer not null
);


create table "public"."staff_remarks" (
    "remarks_ID" uuid not null,
    "remarks_category" text not null,
    "remarks_description" character varying(250) not null,
    "adminId" integer not null
);


create table "public"."student" (
    "id" integer not null default nextval('student_id_seq'::regclass),
    "first_name" text not null,
    "last_name" text not null,
    "full_name" text not null,
    "reg_no" text not null,
    "email" text not null,
    "address" character varying(250) not null,
    "gender" text not null,
    "contact_number" text not null,
    "city" text not null,
    "state" text not null,
    "password" character varying(20) not null,
    "attendanceAttendance_id" uuid not null,
    "monthly_reportMonthly_repo_id" uuid not null,
    "student_remarksRemarks_ID" uuid not null,
    "see_marksSee_id" uuid not null,
    "cIE_marksCie_id" uuid not null,
    "academic_yearID" uuid not null,
    "branchBranch_code" integer not null,
    "semesterSem_id" integer not null
);


create table "public"."student_remarks" (
    "remarks_ID" uuid not null,
    "remarks_category" text not null,
    "remarks_description" character varying(250) not null,
    "adminId" integer not null
);


create table "public"."subject" (
    "sub_code" integer not null default nextval('subject_sub_code_seq'::regclass),
    "subject_name" text not null,
    "sem_num" integer not null
);


create table "public"."type_of_exam" (
    "id" uuid not null,
    "exam_type" text not null,
    "Exam_ID" integer not null
);


create table "public"."unit_test" (
    "UT_id" uuid not null,
    "UT_name" text not null,
    "Date_time" timestamp(3) without time zone not null,
    "Stu_name" text not null,
    "Staff_name" text not null,
    "adminId" integer not null,
    "branchBranch_code" integer not null,
    "subjectSub_code" integer not null,
    "semesterSem_id" integer not null
);


alter sequence "public"."admin_id_seq" owned by "public"."admin"."id";

alter sequence "public"."branch_branch_code_seq" owned by "public"."branch"."branch_code";

alter sequence "public"."exam_schedule_exam_ID_seq" owned by "public"."exam_schedule"."exam_ID";

alter sequence "public"."semester_sem_id_seq" owned by "public"."semester"."sem_id";

alter sequence "public"."staff_id_seq" owned by "public"."staff"."id";

alter sequence "public"."student_id_seq" owned by "public"."student"."id";

alter sequence "public"."subject_sub_code_seq" owned by "public"."subject"."sub_code";

CREATE UNIQUE INDEX "CIE_marks_pkey" ON public."CIE_marks" USING btree (cie_id);

CREATE UNIQUE INDEX academic_year_pkey ON public.academic_year USING btree ("ID");

CREATE UNIQUE INDEX admin_admin_id_key ON public.admin USING btree (admin_id);

CREATE UNIQUE INDEX admin_contact_number_key ON public.admin USING btree (contact_number);

CREATE UNIQUE INDEX admin_email_key ON public.admin USING btree (email);

CREATE UNIQUE INDEX admin_pkey ON public.admin USING btree (id);

CREATE UNIQUE INDEX assignments_pkey ON public.assignments USING btree (assignment_id);

CREATE UNIQUE INDEX attendance_pkey ON public.attendance USING btree (attendance_id);

CREATE UNIQUE INDEX branch_pkey ON public.branch USING btree (branch_code);

CREATE UNIQUE INDEX exam_schedule_pkey ON public.exam_schedule USING btree ("exam_ID");

CREATE UNIQUE INDEX girevence_redressal_pkey ON public.girevence_redressal USING btree ("GR_id");

CREATE UNIQUE INDEX monthly_report_pkey ON public.monthly_report USING btree (monthly_repo_id);

CREATE UNIQUE INDEX notes_pkey ON public.notes USING btree (notes_id);

CREATE UNIQUE INDEX see_marks_pkey ON public.see_marks USING btree (see_id);

CREATE UNIQUE INDEX semester_pkey ON public.semester USING btree (sem_id);

CREATE UNIQUE INDEX staff_contact_number_key ON public.staff USING btree (contact_number);

CREATE UNIQUE INDEX staff_email_key ON public.staff USING btree (email);

CREATE UNIQUE INDEX staff_pkey ON public.staff USING btree (id);

CREATE UNIQUE INDEX staff_remarks_pkey ON public.staff_remarks USING btree ("remarks_ID");

CREATE UNIQUE INDEX staff_staff_id_key ON public.staff USING btree (staff_id);

CREATE UNIQUE INDEX student_contact_number_key ON public.student USING btree (contact_number);

CREATE UNIQUE INDEX student_email_key ON public.student USING btree (email);

CREATE UNIQUE INDEX student_pkey ON public.student USING btree (id);

CREATE UNIQUE INDEX student_reg_no_key ON public.student USING btree (reg_no);

CREATE UNIQUE INDEX student_remarks_pkey ON public.student_remarks USING btree ("remarks_ID");

CREATE UNIQUE INDEX subject_pkey ON public.subject USING btree (sub_code);

CREATE UNIQUE INDEX type_of_exam_pkey ON public.type_of_exam USING btree (id);

CREATE UNIQUE INDEX unit_test_pkey ON public.unit_test USING btree ("UT_id");

alter table "public"."CIE_marks" add constraint "CIE_marks_pkey" PRIMARY KEY using index "CIE_marks_pkey";

alter table "public"."academic_year" add constraint "academic_year_pkey" PRIMARY KEY using index "academic_year_pkey";

alter table "public"."admin" add constraint "admin_pkey" PRIMARY KEY using index "admin_pkey";

alter table "public"."assignments" add constraint "assignments_pkey" PRIMARY KEY using index "assignments_pkey";

alter table "public"."attendance" add constraint "attendance_pkey" PRIMARY KEY using index "attendance_pkey";

alter table "public"."branch" add constraint "branch_pkey" PRIMARY KEY using index "branch_pkey";

alter table "public"."exam_schedule" add constraint "exam_schedule_pkey" PRIMARY KEY using index "exam_schedule_pkey";

alter table "public"."girevence_redressal" add constraint "girevence_redressal_pkey" PRIMARY KEY using index "girevence_redressal_pkey";

alter table "public"."monthly_report" add constraint "monthly_report_pkey" PRIMARY KEY using index "monthly_report_pkey";

alter table "public"."notes" add constraint "notes_pkey" PRIMARY KEY using index "notes_pkey";

alter table "public"."see_marks" add constraint "see_marks_pkey" PRIMARY KEY using index "see_marks_pkey";

alter table "public"."semester" add constraint "semester_pkey" PRIMARY KEY using index "semester_pkey";

alter table "public"."staff" add constraint "staff_pkey" PRIMARY KEY using index "staff_pkey";

alter table "public"."staff_remarks" add constraint "staff_remarks_pkey" PRIMARY KEY using index "staff_remarks_pkey";

alter table "public"."student" add constraint "student_pkey" PRIMARY KEY using index "student_pkey";

alter table "public"."student_remarks" add constraint "student_remarks_pkey" PRIMARY KEY using index "student_remarks_pkey";

alter table "public"."subject" add constraint "subject_pkey" PRIMARY KEY using index "subject_pkey";

alter table "public"."type_of_exam" add constraint "type_of_exam_pkey" PRIMARY KEY using index "type_of_exam_pkey";

alter table "public"."unit_test" add constraint "unit_test_pkey" PRIMARY KEY using index "unit_test_pkey";

alter table "public"."CIE_marks" add constraint "CIE_marks_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."CIE_marks" validate constraint "CIE_marks_adminId_fkey";

alter table "public"."CIE_marks" add constraint "CIE_marks_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES staff(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."CIE_marks" validate constraint "CIE_marks_staffId_fkey";

alter table "public"."assignments" add constraint "assignments_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."assignments" validate constraint "assignments_branchBranch_code_fkey";

alter table "public"."assignments" add constraint "assignments_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES staff(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."assignments" validate constraint "assignments_staffId_fkey";

alter table "public"."assignments" add constraint "assignments_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES student(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."assignments" validate constraint "assignments_studentId_fkey";

alter table "public"."assignments" add constraint "assignments_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."assignments" validate constraint "assignments_subjectSub_code_fkey";

alter table "public"."attendance" add constraint "attendance_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."attendance" validate constraint "attendance_adminId_fkey";

alter table "public"."attendance" add constraint "attendance_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES staff(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."attendance" validate constraint "attendance_staffId_fkey";

alter table "public"."attendance" add constraint "attendance_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."attendance" validate constraint "attendance_subjectSub_code_fkey";

alter table "public"."branch" add constraint "branch_academic_yearID_fkey" FOREIGN KEY ("academic_yearID") REFERENCES academic_year("ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."branch" validate constraint "branch_academic_yearID_fkey";

alter table "public"."exam_schedule" add constraint "exam_schedule_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."exam_schedule" validate constraint "exam_schedule_adminId_fkey";

alter table "public"."exam_schedule" add constraint "exam_schedule_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."exam_schedule" validate constraint "exam_schedule_subjectSub_code_fkey";

alter table "public"."girevence_redressal" add constraint "girevence_redressal_admin_name_fkey" FOREIGN KEY (admin_name) REFERENCES admin(email) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."girevence_redressal" validate constraint "girevence_redressal_admin_name_fkey";

alter table "public"."girevence_redressal" add constraint "girevence_redressal_student_name_fkey" FOREIGN KEY (student_name) REFERENCES student(reg_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."girevence_redressal" validate constraint "girevence_redressal_student_name_fkey";

alter table "public"."monthly_report" add constraint "monthly_report_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."monthly_report" validate constraint "monthly_report_adminId_fkey";

alter table "public"."monthly_report" add constraint "monthly_report_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."monthly_report" validate constraint "monthly_report_subjectSub_code_fkey";

alter table "public"."notes" add constraint "notes_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_branchBranch_code_fkey";

alter table "public"."notes" add constraint "notes_semesterSem_id_fkey" FOREIGN KEY ("semesterSem_id") REFERENCES semester(sem_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_semesterSem_id_fkey";

alter table "public"."notes" add constraint "notes_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES staff(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_staffId_fkey";

alter table "public"."notes" add constraint "notes_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES student(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_studentId_fkey";

alter table "public"."notes" add constraint "notes_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_subjectSub_code_fkey";

alter table "public"."see_marks" add constraint "see_marks_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."see_marks" validate constraint "see_marks_adminId_fkey";

alter table "public"."see_marks" add constraint "see_marks_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES staff(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."see_marks" validate constraint "see_marks_staffId_fkey";

alter table "public"."semester" add constraint "semester_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."semester" validate constraint "semester_branchBranch_code_fkey";

alter table "public"."staff" add constraint "staff_academic_yearID_fkey" FOREIGN KEY ("academic_yearID") REFERENCES academic_year("ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."staff" validate constraint "staff_academic_yearID_fkey";

alter table "public"."staff" add constraint "staff_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."staff" validate constraint "staff_branchBranch_code_fkey";

alter table "public"."staff" add constraint "staff_semesterSem_id_fkey" FOREIGN KEY ("semesterSem_id") REFERENCES semester(sem_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."staff" validate constraint "staff_semesterSem_id_fkey";

alter table "public"."staff" add constraint "staff_staff_remarksRemarks_ID_fkey" FOREIGN KEY ("staff_remarksRemarks_ID") REFERENCES staff_remarks("remarks_ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."staff" validate constraint "staff_staff_remarksRemarks_ID_fkey";

alter table "public"."staff_remarks" add constraint "staff_remarks_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."staff_remarks" validate constraint "staff_remarks_adminId_fkey";

alter table "public"."student" add constraint "student_academic_yearID_fkey" FOREIGN KEY ("academic_yearID") REFERENCES academic_year("ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_academic_yearID_fkey";

alter table "public"."student" add constraint "student_attendanceAttendance_id_fkey" FOREIGN KEY ("attendanceAttendance_id") REFERENCES attendance(attendance_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_attendanceAttendance_id_fkey";

alter table "public"."student" add constraint "student_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_branchBranch_code_fkey";

alter table "public"."student" add constraint "student_cIE_marksCie_id_fkey" FOREIGN KEY ("cIE_marksCie_id") REFERENCES "CIE_marks"(cie_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_cIE_marksCie_id_fkey";

alter table "public"."student" add constraint "student_monthly_reportMonthly_repo_id_fkey" FOREIGN KEY ("monthly_reportMonthly_repo_id") REFERENCES monthly_report(monthly_repo_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_monthly_reportMonthly_repo_id_fkey";

alter table "public"."student" add constraint "student_see_marksSee_id_fkey" FOREIGN KEY ("see_marksSee_id") REFERENCES see_marks(see_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_see_marksSee_id_fkey";

alter table "public"."student" add constraint "student_semesterSem_id_fkey" FOREIGN KEY ("semesterSem_id") REFERENCES semester(sem_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_semesterSem_id_fkey";

alter table "public"."student" add constraint "student_student_remarksRemarks_ID_fkey" FOREIGN KEY ("student_remarksRemarks_ID") REFERENCES student_remarks("remarks_ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student" validate constraint "student_student_remarksRemarks_ID_fkey";

alter table "public"."student_remarks" add constraint "student_remarks_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_remarks" validate constraint "student_remarks_adminId_fkey";

alter table "public"."subject" add constraint "subject_sem_num_fkey" FOREIGN KEY (sem_num) REFERENCES semester(sem_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."subject" validate constraint "subject_sem_num_fkey";

alter table "public"."type_of_exam" add constraint "type_of_exam_Exam_ID_fkey" FOREIGN KEY ("Exam_ID") REFERENCES exam_schedule("exam_ID") ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."type_of_exam" validate constraint "type_of_exam_Exam_ID_fkey";

alter table "public"."unit_test" add constraint "unit_test_Staff_name_fkey" FOREIGN KEY ("Staff_name") REFERENCES staff(staff_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_Staff_name_fkey";

alter table "public"."unit_test" add constraint "unit_test_Stu_name_fkey" FOREIGN KEY ("Stu_name") REFERENCES student(reg_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_Stu_name_fkey";

alter table "public"."unit_test" add constraint "unit_test_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES admin(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_adminId_fkey";

alter table "public"."unit_test" add constraint "unit_test_branchBranch_code_fkey" FOREIGN KEY ("branchBranch_code") REFERENCES branch(branch_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_branchBranch_code_fkey";

alter table "public"."unit_test" add constraint "unit_test_semesterSem_id_fkey" FOREIGN KEY ("semesterSem_id") REFERENCES semester(sem_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_semesterSem_id_fkey";

alter table "public"."unit_test" add constraint "unit_test_subjectSub_code_fkey" FOREIGN KEY ("subjectSub_code") REFERENCES subject(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."unit_test" validate constraint "unit_test_subjectSub_code_fkey";


