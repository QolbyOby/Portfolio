import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Definisikan varian untuk setiap item kartu
const itemVariants = {
    // UBAH DI SINI: Naikkan nilai 'y' untuk gerakan dari bawah yang lebih jauh
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

interface CardProjectProps {
    href: string;
    title: string;
    deskripsi: string;
    slug: string;
}

export default function CardProject(props: CardProjectProps) {
    const { href, title, deskripsi, slug } = props;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
        >
            <Link to={`/portfolio/${slug}`} className="block group">
                <div className="overflow-hidden rounded-xl">
                    <img 
                        src={href} 
                        alt={title} 
                        className='w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105' 
                    />
                </div>
                <h2 className='text-lg font-bold mt-2'>{title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{deskripsi}</p>
            </Link>
        </motion.div>
    );
}