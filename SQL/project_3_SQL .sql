drop table Suppression_Costs_Federal_Firefighting_Costs  cascade;
--drop table Sea_level_grouped_by_years cascade;
--drop table USA_census_population_estimate cascade;
--drop table Clean_climate cascade;
--drop table Merged_fire_archives;


create table Suppression_Costs_Federal_Firefighting_Costs (
	year Date,
	Fires int,
	Acres int,
	"Forest Service ($)" int,
	"DOI Agencies ($)" int,
	"Total ($)" int
);

	
create table Sea_level_grouped_by_years(
	Year varchar,
	Measure varchar,
	"Change in MSL Value" int
);

create table USA_census_population_estimate (
	"Geographical Area" varchar,
	"2013" int,
	"2014" int,
	"2015" int,
	"2016" int,
	"2017" int,
	"2018" int,
	"2019" int,
	"2020" int,
	"2021" int,
	"2022" int
);

create table Clean_climate( 
	Country varchar not null,
	Indicator varchar not null,
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
