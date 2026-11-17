# Backend de Atlas Verbenal

Persistencia con consultas SQL parametrizadas y repositorio para un
adaptador de base con prepare, bind, first, all y batch. D1 y SQLite local
exponen el mismo contrato en el ensamblaje. La carga inicial registra
el marcador de versión en la misma transacción que los registros.
