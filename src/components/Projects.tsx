import { projects } from '@/data/projects';
import Image from 'next/image';
import { FC } from 'react';

export const Projects: FC = () => (
  <div className="flex flex-col items-center justify-center w-full bg-base-200 px-4 py-24">
    <div className="max-w-7xl mx-auto">
      <h1 className="mb-6 text-3xl font-extrabold lg:text-4xl text-center">🛠️ Projects I&apos;m Proud Of</h1>
      <div className="flex items-center justify-center w-full flex-wrap gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-72 max-h-72">
              <Image src={project.image} alt={project.title} width={250} />
            </figure>
            <div className="card-body h-72 max-h-72">
              <h2 className="card-title">
                {project.title}
                {project.tag && <div className="badge badge-secondary">{project.tag}</div>}

              </h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a href={project.url} className="btn btn-primary">{project.buttonText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
