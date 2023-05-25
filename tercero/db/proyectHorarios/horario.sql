CREATE SCHEMA horario;

CREATE TABLE horario."DepartamentoFacultad"
(
    id_facultad integer NOT NULL,
    nombre_facultad character varying(50),
    PRIMARY KEY (id_facultad)
);

CREATE TABLE horario."Jornada"
(
    id_jornada integer NOT NULL,
    jornada character varying(30),
    PRIMARY KEY (id_jornada)
);

CREATE TABLE horario."Paralelo"
(
    id_paralelo integer NOT NULL,
    nombre_paralelo character varying(30),
    PRIMARY KEY (id_paralelo)
);

CREATE TABLE horario."PeriodoAcademico"
(
    id_periodo integer NOT NULL,
    nombre_periodo character varying(30),
    fecha_inicio date,
    fecha_fin date,
    PRIMARY KEY (id_periodo)
);


CREATE TABLE horario."TipoAula"
(
    id_aula integer NOT NULL,
    tipo_aula character varying(30),
    PRIMARY KEY (id_aula)
);

CREATE TABLE horario."Docente"
(
    id_docente integer NOT NULL,
    id_facultad integer,
    nombre_docente character varying(30),
    apellido_docente character varying(30),
    telefono_docente character varying(30),
    tiempocontrato_meses_docente character varying(30),
    rama_docente character varying(30),
    fecha_contr_docente date,
    description character varying(50),
    PRIMARY KEY (id_docente),
    CONSTRAINT id_facultad FOREIGN KEY (id_facultad)
        REFERENCES horario."DepartamentoFacultad" (id_facultad) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE horario."Curso"
(
    id_curso integer NOT NULL,
    id_tipo_aula integer,
    nombre_curso character varying(30),
    capacidad_curso character varying(30),
    PRIMARY KEY (id_curso),
    CONSTRAINT id_tipo_aula FOREIGN KEY (id_tipo_aula)
        REFERENCES horario."TipoAula" (id_aula) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE horario."Carrera"
(
    id_carrera integer NOT NULL,
    id_jornada integer,
    id_paralelo integer,
    id_periodo integer,
    nombre_carrera character varying(30),
    description character varying(50),
    PRIMARY KEY (id_carrera),
    CONSTRAINT id_jornada FOREIGN KEY (id_jornada)
        REFERENCES horario."Jornada" (id_jornada) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_paralelo FOREIGN KEY (id_paralelo)
        REFERENCES horario."Paralelo" (id_paralelo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_periodo FOREIGN KEY (id_periodo)
        REFERENCES horario."PeriodoAcademico" (id_periodo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE horario."MallaCurricular"
(
    id_malla integer NOT NULL,
    id_carrera integer,
    nombre_malla character varying,
    fecha_creacion_malla date,
    fecha_exp_malla date,
    PRIMARY KEY (id_malla),
    CONSTRAINT id_carrera FOREIGN KEY (id_carrera)
        REFERENCES horario."Carrera" (id_carrera) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE horario."Asignatura"
(
    id_asignatura integer NOT NULL,
    id_malla integer,
    nombre_asignatura character varying(50),
    PRIMARY KEY (id_asignatura),
    CONSTRAINT id_malla FOREIGN KEY (id_malla)
        REFERENCES horario."MallaCurricular" (id_malla) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);


CREATE TABLE horario."Horario"
(
    id_horario integer NOT NULL,
    id_docente integer,
    id_asignatura integer,
    id_curso integer,
    dia_semana date,
    hora_inicio date,
    hora_fin date,
    PRIMARY KEY (id_horario),
    CONSTRAINT id_docente FOREIGN KEY (id_docente)
        REFERENCES horario."Docente" (id_docente) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_asignatura FOREIGN KEY (id_asignatura)
        REFERENCES horario."Asignatura" (id_asignatura) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_curso FOREIGN KEY (id_curso)
        REFERENCES horario."Curso" (id_curso) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);


