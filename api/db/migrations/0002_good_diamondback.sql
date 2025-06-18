PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_inventario` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`idUsuario` integer NOT NULL,
	`iditem` integer NOT NULL,
	`quantidade` integer NOT NULL,
	FOREIGN KEY (`idUsuario`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`iditem`) REFERENCES `item`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_inventario`("id", "idUsuario", "iditem", "quantidade") SELECT "id", "idUsuario", "iditem", "quantidade" FROM `inventario`;--> statement-breakpoint
DROP TABLE `inventario`;--> statement-breakpoint
ALTER TABLE `__new_inventario` RENAME TO `inventario`;--> statement-breakpoint
PRAGMA foreign_keys=ON;