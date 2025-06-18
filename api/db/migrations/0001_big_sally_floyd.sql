CREATE TABLE `inventario` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`idUsuario` integer NOT NULL,
	`iditem` integer NOT NULL,
	`quantidade` real NOT NULL,
	FOREIGN KEY (`idUsuario`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`iditem`) REFERENCES `item`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `item` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`descricao` text NOT NULL
);
