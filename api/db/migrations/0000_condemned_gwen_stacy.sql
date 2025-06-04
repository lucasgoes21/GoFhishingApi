CREATE TABLE `especieUsuario` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`idUsuario` integer NOT NULL,
	`idEspecie` integer NOT NULL,
	`tamanho` real,
	`conhecido` integer,
	FOREIGN KEY (`idUsuario`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`idEspecie`) REFERENCES `especies`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `especies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`nomeCientifico` text NOT NULL,
	`tamanhoMedio` text NOT NULL,
	`pesoMedio` text NOT NULL,
	`nativa` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `usuarios` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`senha` text NOT NULL
);
