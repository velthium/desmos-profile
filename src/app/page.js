import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{
        backgroundColor: '#ff7f50',
        color: 'white',
        textAlign: 'center',
        padding: '20px 40px',
        fontSize: '28px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: '600',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '20px',
      }}>
        Create or customize your Desmos profile
      </div>
    </main>
  );
}
