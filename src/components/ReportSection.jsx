import { motion } from "framer-motion";
import { HiCloudDownload, HiDocumentText } from "react-icons/hi";

const LightCard = ({ children, className = "" }) => (
  // Adapted to dark theme: dark background, white text
  <div
    className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg ${className}`}
  >
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <a
    {...props}
    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${className}`}
  >
    {children}
  </a>
);

export default function ReportSection() {
  const pdfUrl = "/assets/report.pdf"; // Ensure report.pdf is in public/assets/

  return (
    <section id="report" className="py-20 bg-black/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Project <span className="text-eco-green">Report</span>
          </h2>
          <p className="text-gray-400">
            Technical documentation and research details
          </p>
        </motion.div>

        <LightCard className="overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 border-b border-white/10 bg-white/5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-eco-green/20 text-eco-green">
                  <HiDocumentText className="h-6 w-6" />
                </div>
                Eco-Silo Final Report
              </h3>
            </div>

            <Button
              href={pdfUrl}
              download="Eco-Silo-Report.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black transition duration-200 hover:scale-110"
            >
              <HiCloudDownload className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>

          <div className="p-1 sm:p-6 bg-black/40 min-h-150 flex items-center justify-center">
            {/* PDF Viewer Iframe */}
            <iframe
              src={`${pdfUrl}#toolbar=0&view=FitH`}
              className="w-full h-200 rounded-lg shadow-2xl bg-white border border-gray-700"
              title="Project Report PDF"
            />
          </div>
        </LightCard>
      </div>
    </section>
  );
}
