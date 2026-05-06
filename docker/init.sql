-- -------------------------------------------------------------
-- TablePlus 6.9.1(670)
--
-- https://tableplus.com/
--
-- Database: carbon
-- Generation Time: 2026-05-07 01:24:54.2260
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."activities";
-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS activities_id_seq;

-- Table Definition
CREATE TABLE "public"."activities" (
    "id" int4 NOT NULL DEFAULT nextval('activities_id_seq'::regclass),
    "date" date,
    "category" varchar(50),
    "description" varchar(50),
    "amount" numeric,
    "unit" varchar(50),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."emission_factor_version";
-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS emission_factor_version_id_seq;

-- Table Definition
CREATE TABLE "public"."emission_factor_version" (
    "id" int4 NOT NULL DEFAULT nextval('emission_factor_version_id_seq'::regclass),
    "version" int4 NOT NULL,
    "created_at" date DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."emission_factor";
-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS emission_factor_id_seq;

-- Table Definition
CREATE TABLE "public"."emission_factor" (
    "id" int4 NOT NULL DEFAULT nextval('emission_factor_id_seq'::regclass),
    "category" varchar(50) NOT NULL,
    "coeff" numeric NOT NULL,
    "unit" varchar(50) NOT NULL,
    "version_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."activities" ("id", "date", "category", "description", "amount", "unit") VALUES
(1, '2025-01-01', '전기', '한국전력', 110, 'kWh'),
(2, '2025-02-01', '전기', '한국전력', 112, 'kWh'),
(3, '2025-03-01', '전기', '한국전력', 115, 'kWh'),
(4, '2025-04-01', '전기', '한국전력', 130, 'kWh'),
(5, '2025-05-01', '전기', '한국전력', 120, 'kWh'),
(6, '2025-06-01', '전기', '한국전력', 110, 'kWh'),
(7, '2025-07-01', '전기', '한국전력', 120, 'kWh'),
(8, '2025-08-01', '전기', '한국전력', 111, 'kWh'),
(9, '2025-05-01', '전기', '한국전력', 101, 'kWh'),
(10, '2025-01-01', '원소재', '플라스틱 1', 230, 'kg'),
(11, '2025-02-01', '원소재', '플라스틱 1', 340, 'kg'),
(12, '2025-03-01', '원소재', '플라스틱 2', 23, 'kg'),
(13, '2025-03-01', '원소재', '플라스틱 1', 430, 'kg'),
(14, '2025-04-01', '원소재', '플라스틱 1', 510, 'kg'),
(15, '2025-05-01', '원소재', '플라스틱 1', 424, 'kg'),
(16, '2025-05-01', '원소재', '플라스틱 2', 40, 'kg'),
(17, '2025-06-01', '원소재', '플라스틱 1', 450, 'kg'),
(18, '2025-07-01', '원소재', '플라스틱 1', 340, 'kg'),
(19, '2025-07-01', '원소재', '플라스틱 2', 43, 'kg'),
(20, '2025-08-01', '원소재', '플라스틱 1', 230, 'kg'),
(21, '2025-05-01', '원소재', '플라스틱 1', 232, 'kg'),
(22, '2025-01-01', '운송', '트럭', 41, 'ton-km'),
(23, '2025-02-01', '운송', '트럭', 211, 'ton-km'),
(24, '2025-03-01', '운송', '트럭', 123, 'ton-km'),
(25, '2025-04-01', '운송', '트럭', 42, 'ton-km'),
(26, '2025-05-01', '운송', '트럭', 123, 'ton-km'),
(27, '2025-06-01', '운송', '트럭', 123, 'ton-km'),
(28, '2025-07-01', '운송', '트럭', 41, 'ton-km'),
(29, '2025-08-01', '운송', '트럭', 123, 'ton-km'),
(30, '2025-05-01', '운송', '트럭', 12, 'ton-km');

INSERT INTO "public"."emission_factor_version" ("id", "version", "created_at") VALUES
(1, 0, '2026-05-03');

INSERT INTO "public"."emission_factor" ("id", "category", "coeff", "unit", "version_id") VALUES
(2, '전기 (한국전력 기본값)', 0.456, 'kgCO₂e / kWh', 1),
(3, '원소재 (플라스틱 1)', 2.3, 'kgCO₂e / kg', 1),
(4, '원소재 (플라스틱 2)', 3.2, 'kgCO₂e / kg', 1),
(5, '운송 (트럭)', 3.5, 'kgCO₂e / ton-km', 1);

