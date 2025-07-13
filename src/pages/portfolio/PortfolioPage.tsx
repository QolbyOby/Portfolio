import { motion } from "framer-motion"; // 1. Impor motion
import CardProject from "./components/CardProject";
import { projectsData } from "./components/data";

// 2. Definisikan varian untuk kontainer grid
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Atur jeda antar animasi kartu
        },
    },
};

export default function PortfolioPage() {
    return (
        <div>
            {/* 3. Ubah div menjadi motion.div dan terapkan varian */}
            <motion.div
                className="grid grid-cols-2  gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projectsData.map((project) => (
                    <CardProject
                        key={project.slug}
                        slug={project.slug}
                        href={project.image}
                        title={project.title}
                        deskripsi={project.deskripsi}
                    />
                ))}
            </motion.div>
        </div>
    );
}