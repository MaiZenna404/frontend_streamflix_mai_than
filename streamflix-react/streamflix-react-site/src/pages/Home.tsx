import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

export default function Home() {
    return (
        <>
            <div className="container p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Bienvenue sur <span className="text-red-500">Streamflix</span></h2>
                <p className="text-base text-gray-300">
                    Découvrez une vaste sélection de films et séries, ajoutez vos favoris à votre liste personnelle, et testez vos connaissances avec notre quiz interactif !
                </p>
            </div>
            <Hero />
            <div className="container pt-2 text-center">
                <MovieSection id="trending-films" title="Films Populaires" ariaLabel="Films Populaires" movies={[]} />
                <MovieSection id="upcoming-films" title="Films à Venir" ariaLabel="Films à Venir" movies={[]} />
            </div>
            
        </>
  );
}
