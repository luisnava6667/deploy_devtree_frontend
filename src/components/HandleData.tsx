import { SocialNetwork, UserHandle } from "../types";

type HandleDataProps = {
  data: UserHandle;
};
export default function HandleData({ data }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled,
  );

  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
      {data.image && (
        <img
          src={data.image}
          alt={data.handle}
          className="max-w-[250px] mx-auto rounded-full"
        />
      )}
      <p className="text-lg text-center font-bold">{data.description}</p>
      <div className="mt-20 flex flex-col gap-6">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white px-5 py-2 flex items-center gap-6 rounded-lg">
                <img src={`/social/icon_${link.name}.svg`} className="w-12" alt="imagen red social" />
              <p className="text-black capitalize font-bold text-lg">

                Visita mi: {link.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-center">No hay enlaces en este perfil</p>
        )}
      </div>
    </div>
  );
}

