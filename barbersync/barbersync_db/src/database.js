const oracledb = require('oracledb');

async function testConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: 'system',
      password: 'APT_grupo2',
      connectString: 'localhost:1521' // Ajusta esto según tu configuración
    });

    console.log("Conectado exitosamente a Oracle Database");

    await connection.close();
  } catch (err) {
    console.error(err);
  }
}

testConnection();
