export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-4xl text-blue-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-600 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-2xl text-gray-100">Sorry, we couldn’t find the page you’re looking for.</p>
            <p className="mt-6 text-2xl text-gray-200">If you want to aceess to nuriflex please login first.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-red-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
             
            </div>
          </div>
        </main>
      </>
    )
  }
  