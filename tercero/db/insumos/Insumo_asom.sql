PGDMP                         {            Insumos    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    49335    Insumos    DATABASE     ~   CREATE DATABASE "Insumos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE "Insumos";
                postgres    false            �            1259    49336    administrador    TABLE     �   CREATE TABLE public.administrador (
    cedula_admin integer NOT NULL,
    correo_admin character varying(50),
    nombre_admin character varying(50),
    "cotraseña_admin" character varying(16),
    verificasion_admin character varying(16)
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    49361    empleado    TABLE     �   CREATE TABLE public.empleado (
    cedula_emp integer NOT NULL,
    cedula_usu integer,
    correo_emp character varying(50),
    nombre_emp character varying(50),
    apellidos_emp character varying(50),
    direccion_emp character varying(50)
);
    DROP TABLE public.empleado;
       public         heap    postgres    false            �            1259    49372    insumo    TABLE     �   CREATE TABLE public.insumo (
    id_ins integer NOT NULL,
    cedula_emp integer,
    cedula_usu integer,
    serie_ins character varying(50),
    nombre_ins character varying(50),
    fecha_neg_ins date,
    fecha_ent_ins date
);
    DROP TABLE public.insumo;
       public         heap    postgres    false            �            1259    49371    insumo_id_ins_seq    SEQUENCE     �   CREATE SEQUENCE public.insumo_id_ins_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.insumo_id_ins_seq;
       public          postgres    false    219                       0    0    insumo_id_ins_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.insumo_id_ins_seq OWNED BY public.insumo.id_ins;
          public          postgres    false    218            �            1259    49341    roles    TABLE     {   CREATE TABLE public.roles (
    id_rol integer NOT NULL,
    nombre_rol character varying(50),
    cedula_admin integer
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    49351    usuarios    TABLE     4  CREATE TABLE public.usuarios (
    cedula_usu integer NOT NULL,
    id_rol integer,
    correo_usu character varying(50),
    nombre_usu character varying(50),
    "cotraseña_usu" character varying(16),
    verificasion_usu character varying(16),
    estado_usu character varying(30),
    fecha_neg date
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            u           2604    49375    insumo id_ins    DEFAULT     n   ALTER TABLE ONLY public.insumo ALTER COLUMN id_ins SET DEFAULT nextval('public.insumo_id_ins_seq'::regclass);
 <   ALTER TABLE public.insumo ALTER COLUMN id_ins DROP DEFAULT;
       public          postgres    false    218    219    219                      0    49336    administrador 
   TABLE DATA           y   COPY public.administrador (cedula_admin, correo_admin, nombre_admin, "cotraseña_admin", verificasion_admin) FROM stdin;
    public          postgres    false    214   '!                 0    49361    empleado 
   TABLE DATA           p   COPY public.empleado (cedula_emp, cedula_usu, correo_emp, nombre_emp, apellidos_emp, direccion_emp) FROM stdin;
    public          postgres    false    217   �!                 0    49372    insumo 
   TABLE DATA           u   COPY public.insumo (id_ins, cedula_emp, cedula_usu, serie_ins, nombre_ins, fecha_neg_ins, fecha_ent_ins) FROM stdin;
    public          postgres    false    219   p"                 0    49341    roles 
   TABLE DATA           A   COPY public.roles (id_rol, nombre_rol, cedula_admin) FROM stdin;
    public          postgres    false    215   �"                 0    49351    usuarios 
   TABLE DATA           �   COPY public.usuarios (cedula_usu, id_rol, correo_usu, nombre_usu, "cotraseña_usu", verificasion_usu, estado_usu, fecha_neg) FROM stdin;
    public          postgres    false    216   ;#                   0    0    insumo_id_ins_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.insumo_id_ins_seq', 1, false);
          public          postgres    false    218            w           2606    49340     administrador administrador_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (cedula_admin);
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT administrador_pkey;
       public            postgres    false    214            }           2606    49365    empleado empleado_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.empleado
    ADD CONSTRAINT empleado_pkey PRIMARY KEY (cedula_emp);
 @   ALTER TABLE ONLY public.empleado DROP CONSTRAINT empleado_pkey;
       public            postgres    false    217                       2606    49377    insumo insumo_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.insumo
    ADD CONSTRAINT insumo_pkey PRIMARY KEY (id_ins);
 <   ALTER TABLE ONLY public.insumo DROP CONSTRAINT insumo_pkey;
       public            postgres    false    219            y           2606    49345    roles roles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id_rol);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215            {           2606    49355    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (cedula_usu);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    216            �           2606    49346    roles cedula_admin    FK CONSTRAINT     �   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT cedula_admin FOREIGN KEY (cedula_admin) REFERENCES public.administrador(cedula_admin);
 <   ALTER TABLE ONLY public.roles DROP CONSTRAINT cedula_admin;
       public          postgres    false    3191    214    215            �           2606    49383    insumo cedula_emp    FK CONSTRAINT     ~   ALTER TABLE ONLY public.insumo
    ADD CONSTRAINT cedula_emp FOREIGN KEY (cedula_emp) REFERENCES public.empleado(cedula_emp);
 ;   ALTER TABLE ONLY public.insumo DROP CONSTRAINT cedula_emp;
       public          postgres    false    217    3197    219            �           2606    49366    empleado cedula_usu    FK CONSTRAINT     �   ALTER TABLE ONLY public.empleado
    ADD CONSTRAINT cedula_usu FOREIGN KEY (cedula_usu) REFERENCES public.usuarios(cedula_usu);
 =   ALTER TABLE ONLY public.empleado DROP CONSTRAINT cedula_usu;
       public          postgres    false    3195    217    216            �           2606    49378    insumo cedula_usu    FK CONSTRAINT     ~   ALTER TABLE ONLY public.insumo
    ADD CONSTRAINT cedula_usu FOREIGN KEY (cedula_usu) REFERENCES public.usuarios(cedula_usu);
 ;   ALTER TABLE ONLY public.insumo DROP CONSTRAINT cedula_usu;
       public          postgres    false    216    3195    219            �           2606    49356    usuarios id_rol    FK CONSTRAINT     q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT id_rol FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);
 9   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT id_rol;
       public          postgres    false    3193    216    215               v   x�Uα� �>�X*q�C\P�ш���u���.)��j�L���M��k5�Q���F���`#�r�:7Bj�f���S8Ύ��4�4�|��I��[x+����R9rb�WZ�P�G�         �   x�UϽ�0���)xBK���A�].pCj�CJ����DS���s.?)yV����l8�].�Em��[�0��λH���O4_%�'����� r�8D�p%�#�����k�m�m���F���H}��tLv��e�2c��dp��i+�'|���V���Վ���=Lak&S�pIF�W����[3         q   x�M�;�@C�z�^����d/i)((�O1#��6�2�ʥ�`��s[ٶ���6�Ǆ�0+sa%�c�%�ʗ���q� ��V";΁SB'V�JT�5pI�픽f�d�C�         :   x�=ȱ	  �:?����qAp�B��ʣ�{h\�����P�:����@VdGb p��         �   x�m�A� ��p�600�ե&���F1mI���v 
1l�|Hx��vd��R*P���p��{&8���η%�B]��݂u/��u'��J�/��b-n�����hAX �!]A�G��I��	?�#� #�BN1Z�J.)[���+T)���C��l)$���-�f)     