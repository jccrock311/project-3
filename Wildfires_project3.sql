
--Drop tables 

drop table if exists Human-caused wildfires -  Number of fires caused;
drop table if exists Human-caused wildfries - Affected acreage;
drop table if exists Lightning caused wildfires - Affected acreage;
drop table if exists Lightning caused wildfires - Number of fires caused; 

create table HumanCausedFires  (
"Year" date not null,
"Alaska" int   NOT null,
"Northwest" int   NOT NULL,
"Northern California" int   NOT NULL,
"Southern California" int   NOT null,
"Northern Rockies" int   NOT null,
"Great Basin" int   NOT null,
"Western Great Basin" int   NOT null,
"Southwest" int   NOT null,
"Rocky Mount" int   NOT null,
"Eastern Area" int   NOT null,
"Southern Area" int   NOT null,
"Total" int   NOT null,
Constraint "pk_HumanCausedFires" primary key ("Year")

);

create table HumanAffectedAcreage (
"Year" date not null,
"Alaska" int   NOT null,
"Northwest" int   NOT NULL,
"Northern California" int   NOT NULL,
"Southern California" int   NOT null,
"Northern Rockies" int   NOT null,
"Great Basin" int   NOT null,
"Western Great Basin" int   NOT null,
"Southwest" int   NOT null,
"Rocky Mount" int   NOT null,
"Eastern Area" int   NOT null,
"Southern Area" int   NOT null,
"Total" int   NOT null,
Constraint "pk_HumanAffectedAcreage" primary key ("Year")
);

create table LightningCausedFires (
"Year" date not null,
"Alaska" int   NOT null,
"Northwest" int   NOT NULL,
"Northern California" int   NOT NULL,
"Southern California" int   NOT null,
"Northern Rockies" int   NOT null,
"Great Basin" int   NOT null,
"Western Great Basin" int   NOT null,
"Southwest" int   NOT null,
"Rocky Mount" int   NOT null,
"Eastern Area" int   NOT null,
"Southern Area" int   NOT null,
"Total" int   NOT null,
Constraint "pk_LightningCausedFires" primary key ("Year")
);

create table LightningAffectedAcreage (
"Year" date not null,
"Alaska" int   NOT null,
"Northwest" int   NOT NULL,
"Northern California" int   NOT NULL,
"Southern California" int   NOT null,
"Northern Rockies" int   NOT null,
"Great Basin" int   NOT null,
"Western Great Basin" int   NOT null,
"Southwest" int   NOT null,
"Rocky Mount" int   NOT null,
"Eastern Area" int   NOT null,
"Southern Area" int   NOT null,
"Total" int   NOT null,
Constraint "pk_LightningAffectedAcreage" primary key ("Year")
);





