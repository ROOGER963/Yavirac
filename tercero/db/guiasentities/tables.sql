
create table tipo_paquete (
	paq_id_tipo serial primary key not null,
	paq_nombre_tipo varchar (60) not null
);

create table ciudad_destinatario(
	dest_cod_ciudad serial primary key not null,
	dest_nom_ciudad varchar (20) not null
);

create table organizacio_origen(
	orgn_id serial primary key not null,
	orgn_nom varchar (50) not null,
	orgn_act varchar (50) not null,
	orgn_ciudad varchar (20) not null,
	orgn_dir varchar (20) not null,
	orgn_tel int not null,
	orgn_cel int not null
);

create table paquete(
	paq_id serial primary key not null,
	paq_id_tipo int not null, 
	paq_nom varchar (50) not null,
	paq_peso float not null,
	paq_valor money not null,
	constraint paq_id_tipo foreign key (paq_id_tipo) references tipo_paquete (paq_id_tipo)
);

create table destinatario(
	dest_id serial primary key not null,
	dest_nom varchar (40) not null,
	dest_cod_ciudad int not null,
	dest_dir varchar (50) not null,
	dest_tel int not null,
	dest_km int not null,
	dest_precio_km money not null,
	constraint dest_cod_ciudad foreign key (dest_cod_ciudad) references ciudad_destinatario (dest_cod_ciudad)
);

create table guia (
	guia_no serial primary key not null,
	guia_fecha date not null,
	guia_hora time not null, 
	guia_valor_total money not null,
	orgn_id int not null,
	dest_id int not null,
	constraint orgn_id foreign key (orgn_id) references organizacio_origen (orgn_id),
	constraint dest_id foreign key (dest_id) references destinatario (dest_id)
);

create table detalle_paquete(
	id_detalle serial primary key not null,
	det_descripcion varchar (50) not null,
	det_cantidad int not null,
	guia_no int not null,
	paq_id int not null,
	constraint guia_no foreign key (guia_no) references guia (guia_no),
	constraint paq_id foreign key (paq_id) references paquete (paq_id)
)