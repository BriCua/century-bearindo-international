import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import sanityClient from "../../sanityClient";
import HighlightPostCard from "../../components/HighlightsPostCard";
import "../../partials/highlights/card.css";
import AnimatedContent from "../../components/animations/AnimatedContent";

export default function HighlightPage() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]); // Store all posts for client-side filtering
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const navigate = useNavigate();
  
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  useEffect(() => {
    // Build the GROQ query with filters
    let query = `*[_type == "post"`;
    
    // Add category filter if specified
    if (category) {
      query += ` && category == "${category}"`;
    }
    
    // Add subcategory filter if specified
    if (subcategory) {
      query += ` && subcategory == "${subcategory}"`;
    }
    
    query += `]{
      title,
      slug,
      publishedAt,
      excerpt,
      category,
      subcategory,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      "name": author->name,
    } | order(publishedAt desc)`;

    sanityClient
      .fetch(query)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, [category, subcategory]);

  return (
    <>
      <title>Highlights - PT. Century Bearindo International</title>
      <meta
        name="description"
        content="Baca artikel terbaru dari PT. Century Bearindo International mengenai industri, produk, dan layanan kami."
      />
      <meta
        name="keywords"
        content="Highlight, artikel, berita, informasi, industri, bearing"
      />
      <div className="mt-4 mb-16">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.5}
        >
        <div className="items-center flex-col group w-fit justify-self-center origin-center mb-8">
            <h1 className="def-ease-out group-hover:tracking-[0.15em]">Highlights</h1>
            <hr className="line def-ease-out group-hover:scale-x-500"></hr>
          </div>
        
        {/* Filter Controls - Outside title container */}
        <div className="mb-8 w-full max-w-md mx-auto">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
            </svg>
                Filter
            <svg className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showFilters && (
            <div className="mt-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="space-y-3">
                <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select 
                    value={category || ''} 
                    onChange={(e) => {
                      const newParams = new URLSearchParams(searchParams);
                      if (e.target.value) {
                        newParams.set('category', e.target.value);
                      } else {
                        newParams.delete('category');
                      }
                      newParams.delete('subcategory'); // Reset subcategory when category changes
                      setSearchParams(newParams);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                        <option value="">Semua Kategori</option>
                        <option value="layanan">Layanan</option>
                        <option value="produk">Produk</option>
                        <option value="general">Umum</option>
                  </select>
                </div>
                
                {category && (
                  <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sub Kategori</label>
                    <select 
                      value={subcategory || ''} 
                      onChange={(e) => {
                        const newParams = new URLSearchParams(searchParams);
                        if (e.target.value) {
                          newParams.set('subcategory', e.target.value);
                        } else {
                          newParams.delete('subcategory');
                        }
                        setSearchParams(newParams);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                          <option value="">Semua Sub Kategori</option>
                      {category === 'layanan' && [
                        <option key="pemantauan-kondisi" value="pemantauan-kondisi">Pemantauan Kondisi</option>,
                        <option key="laser-shaft-alignment" value="laser-shaft-alignment">Laser Shaft Alignment</option>,
                        <option key="penyeimbangan-on-site" value="penyeimbangan-on-site">Penyeimbangan On-Site</option>,
                        <option key="alat-bearing-berukuran-besar" value="alat-bearing-berukuran-besar">Alat - Bearing Berukuran Besar</option>,
                        <option key="training" value="training">Training</option>
                      ]}
                    </select>
                  </div>
                )}
                
                {(category || subcategory) && (
                  <div className="pt-2">
                    <button 
                      onClick={() => {
                        setSearchParams(new URLSearchParams());
                        setShowFilters(false);
                      }}
                      className="w-full px-3 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                          Hapus Filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        </AnimatedContent>
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
        <div className="post-list flex justify-self-center justify-center flex-wrap gap-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <HighlightPostCard key={post.slug.current} post={post} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {(category || subcategory) ? (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada artikel untuk filter ini</h3>
                    <p className="text-gray-600 mb-4">Tidak ada highlights yang tersedia untuk kategori yang dipilih.</p>
                    <button 
                      onClick={() => navigate('/highlights')}
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Lihat Semua Highlights
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada highlights tersedia</h3>
                    <p className="text-gray-600">Periksa kembali nanti untuk konten baru!</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        </AnimatedContent>
      </div>
    </>
  );
}