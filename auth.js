// Substitua pelas suas chaves do Supabase (estão em Project Settings > API)
const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_KEY_ANON_AQUI';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Lógica de Cadastro
document.getElementById('form-cadastro')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('cadastro-email').value;
    const password = document.getElementById('cadastro-senha').value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) alert("Erro ao cadastrar: " + error.message);
    else alert("Verifique seu e-mail para confirmar o cadastro!");
});

// Lógica de Login
document.getElementById('form-login')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-senha').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) alert("Erro ao entrar: " + error.message);
    else window.location.href = 'index.html'; // Volta para a loja logado
});
