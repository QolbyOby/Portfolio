import { useParams, Link } from "react-router-dom";
import { projectsData } from "./data";

export default function DetailPage() {
    const { projectSlug } = useParams();

    // 2. Cari data proyek yang cocok berdasarkan slug
    const project = projectsData.find(p => p.slug === projectSlug);

    if (!project) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Proyek Tidak Ditemukan</h1>
                <Link to="/portfolio" className="text-blue-500 hover:underline mt-4 inline-block">
                    &larr; Kembali ke Portfolio
                </Link>
            </div>
        );
    }


    return (
        <div>
            <Link to="/portfolio" className="text-blue-500 hover:underline mb-8 inline-block">
                &larr; Kembali ke Portfolio
            </Link>
            <p className="text-justify indent-6">
                {project.detail}
            </p>
            {project.website && (
                <div className="flex mt-5">
                    <span className="mr-3 text-red-200 font-bold rounded-md px-1 bg-red-500">WEBSITE</span>
                    <a href={project.website} target="_blank" className="text-blue-500 hover:underline">{project.website}</a>
                </div>
            )}
            <div className="flex mt-5">
                <span className="mr-3 text-red-200 font-bold rounded-md px-1 h-6 bg-red-500">STACK</span> Next js, Tailwind css, Shadcn UI, Framer motion
            </div>
            {project.github && (
                <div className="flex mt-5">
                    <span className="mr-3 text-red-200 font-bold rounded-md px-1 h-6 bg-red-500">GITHUB</span>
                    <a href={project.github} target="_blank" className="text-blue-500 hover:underline">{project.github}</a>
                </div>
            )}
            {project.videoUrl && (
                <div className="mt-5">
                    <video
                        className="w-full h-full object-cover rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={project.videoUrl} type="video/mp4" />
                    </video>
                </div>
            )}
            <div>
                <h2 className="text-2xl font-bold mb-4 mt-5">Galeri Proyek</h2>
                {project.galleryImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md mt-3"
                    />
                ))}

            </div>
        </div>
    )
}