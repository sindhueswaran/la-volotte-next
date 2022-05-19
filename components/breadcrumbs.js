import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  
  const router = useRouter()
  const pid  = router.asPath 

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2> La Volotte
              </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0">
                <li className="breadcrumb-item">
                  <a className="text-dark" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  { pid }
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
