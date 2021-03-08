
-- SQL SCHEMA 

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

CREATE TABLE public.people (
  _id serial PRIMARY KEY NOT NULL,
  username varchar NOT NULL,
  token integer NOT NULL,
  user_profile JSON,
  matches integer,
  potential integer
);

CREATE TABLE public.matches (
  _id serial PRIMARY KEY NOT NULL,
  match integer
);

CREATE TABLE public.potentials (
  _id integer,
  username varchar, 
  potential_matches_id integer,
  potential_matches_username varchar
);

ALTER TABLE public.people ADD CONSTRAINT "people_fk0" FOREIGN KEY (matches) REFERENCES public.matches(_id);
ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY (potential) REFERENCES public.potentials(_id);