export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans p-8 md:p-16 max-w-4xl mx-auto">
      
      {/* HEADER */}
      <header className="border-b-2 border-gray-100 pb-8 mb-8 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Kenny</h1>
        <div className="mt-2 text-gray-600 flex flex-wrap justify-center md:justify-start gap-4">
          <a href="mailto:kennyn@usf.edu" className="hover:text-blue-700 underline">kennyn@usf.edu</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-700 underline">LinkedIn</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-700 underline">GitHub</a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-blue-700 mb-4">Summary</h2>
        <p className="leading-relaxed text-gray-700">
          Aspiring Business Analytics professional and current student at the University of South Florida. 
          Experienced in leadership and customer service with a strong technical foundation in data analysis, 
          SQL database design, and modern web technologies.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-blue-700 mb-4">Education</h2>
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="font-bold text-lg text-slate-800">University of South Florida</h3>
          <span className="text-gray-500 text-sm">Expected May 2027</span>
        </div>
        <p className="text-gray-700 italic">Bachelor of Science in Business Analytics and Information Systems</p>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-blue-700 mb-4">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-lg text-slate-800">Valet Supervisor</h3>
              <span className="text-gray-500 text-sm italic">2025 — Present</span>
            </div>
            <p className="text-gray-700 font-medium mb-2">Evolutions Parking & Guest Services</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600">
              <li>Manage daily valet operations and oversee a team of attendants to ensure high service standards.</li>
              <li>Coordinate vehicle logistics and resolve customer concerns in a fast-paced environment.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-lg text-slate-800">Customer Service Staff</h3>
              <span className="text-gray-500 text-sm italic">Previous Dates</span>
            </div>
            <p className="text-gray-700 font-medium mb-2">Publix Super Markets</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600">
              <li>Delivered exceptional service in a high-volume retail environment, handling transactions and customer inquiries.</li>
              <li>Collaborated with team members to maintain store standards and inventory accuracy.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS (Crucial for Business Analytics) */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-blue-700 mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg text-slate-800">Customer Churn Analysis</h3>
            <p className="text-gray-600 text-sm italic mb-1">Python, Excel, Tableau</p>
            <p className="text-gray-700">Conducted a comprehensive churn analysis using a Kaggle dataset to identify key patterns in customer retention.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">SQL Database for Inventory</h3>
            <p className="text-gray-600 text-sm italic mb-1">SQL Server Management Studio</p>
            <p className="text-gray-700">Designed and implemented a relational database to track resources.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-blue-700 mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700">
          <div className="flex items-center gap-2"><span>•</span> Python & SQL</div>
          <div className="flex items-center gap-2"><span>•</span> Tableau</div>
          <div className="flex items-center gap-2"><span>•</span> JavaScript</div>
          <div className="flex items-center gap-2"><span>•</span> HTML & CSS</div>
        
        </div>
      </section>

    </main>
  );
}