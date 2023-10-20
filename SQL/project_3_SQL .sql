drop table Suppression_Costs_Federal_Firefighting_Costs  cascade;
drop table Sea_level_grouped_by_years cascade;
drop table USA_census_population_estimate cascade;
drop table Clean_climate2 cascade;
drop table HumanCausedFires cascade;


create table Suppression_Costs_Federal_Firefighting_Costs (
	"Year" int,
	"Fires" int,
	"Acres" int,
	"Forest Service ($)" int8,
	"DOI Agencies ($)" int8,
	"Total ($)" int8,
	Constraint "pk_HumanCausedFires" primary key ("Year")
);

	
create table Sea_level_grouped_by_years(
	"Year" int,
	Measure varchar,
	"Change in MSL Value" int,
	Constraint "pk_HumanCausedFires" primary key ("Year")
);

create table USA_census_population_estimate (
	"Geographic Area" varchar,
	"2013" bigint,
	"2014" bigint,
	"2015" bigint,
	"2016" bigint,
	"2017" bigint,
	"2018" bigint,
	"2019" bigint,
	"2020" bigint,
	"2021" bigint,
	"2022" bigint
);

create table Clean_climate( 
	Country varchar not null,
	"Indicator" varchar not null,
	Unit varchar not null,
	F2012 varchar,
	F2013 varchar,	
	F2014 varchar,
	F2015 varchar,
	F2016 varchar, 
	F2017 varchar,
	F2018 varchar,
	F2019 varchar,
	F2020 varchar,
	F2021 varchar,
	F2022 varchar
);

create table Merged_fire_archives ( 
	latitude int,
	longitude int,
	brightness int,
	scan int,
	track int,
	acq_date date,
	acq_time int,
	satellite varchar,
	instrument varchar,
	confidence int,
	"version" int,
	bright_t31 int,
	frp int,
	daynight varchar
);

create table HumanCausedFires  (
"Year" int,
"Alaska" int,
"Northwest" int,
"Northern California" int,
"Southern California" int,
"Northern Rockies" int,
"Great Basin" int,
"Western Great Basin" int,
"Southwest" int,
"Rocky Mount" int,
"Eastern Area" int,
"Southern Area" int,
"Total" int,
constraint "pk_HumanCausedFires" primary key ("Year")
);

create table HumanAffectedAcreage (
"Year" int,
"Alaska" int,
"Northwest" int,
"Northern California" int,
"Southern California" int,
"Northern Rockies" int,
"Great Basin" int,
"Western Great Basin" int,
"Southwest" int,
"Rocky Mount" int,
"Eastern Area" int,
"Southern Area" int,
"Total" int,
Constraint "pk_HumanAffectedAcreage" primary key ("Year")
);

create table LightningCausedFires (
"Year" int,
"Alaska" int,
"Northwest" int,
"Northern California" int,
"Southern California" int,
"Northern Rockies" int,
"Great Basin" int,
"Western Great Basin" int,
"Southwest" int,
"Rocky Mount" int,
"Eastern Area" int,
"Southern Area" int,
"Total" int,
Constraint "pk_LightningCausedFires" primary key ("Year")
);

create table LightningAffectedAcreage (
"Year" int,
"Alaska" int,
"Northwest" int,
"Northern California" int,
"Southern California" int,
"Northern Rockies" int,
"Great Basin" int,
"Western Great Basin" int,
"Southwest" int,
"Rocky Mount" int,
"Eastern Area" int,
"Southern Area" int,
"Total" int,
Constraint "pk_LightningAffectedAcreage" primary key ("Year")
);