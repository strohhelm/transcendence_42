async function loadHTMLTemplate(url: string, id:string) {
	const response = await fetch(url);
	if (! response.ok)
			throw new Error(`HTTP ${response.status}`);
	const html = await response.text();
	document.getElementById(id)!.innerHTML = html;
}


type Route = {
	path: string,
	template: string,
};

const routes: Route[]= [
	{ path: "/", template: `/` },
	{ path: "/settings", template: `/settings` },
	{ path: "/random", template: `/random` },
	{ path: "/profile", template: `/profile` },
	// { path: "/", template: `/home` },
];


function navigate(path: string) {
	
	const route = routes.find(route => route.path === path);
	if (!route)
	{
		document.getElementById("page")!.innerHTML = "<h1>404 Not Found</h1>";
		return;
	}
	history.pushState({}, "", path);
	loadHTMLTemplate(route.template, "page");
}

function handleClickLink(e: Event) {
	e.preventDefault();
	 const target = e.target as HTMLAnchorElement;
	if (target.matches("a[data-link]")) {
		e.preventDefault();
	const href = target.getAttribute("href");
	if (href)
		navigate(href);
	}
}

window.addEventListener("popstate", () => {
  const route = routes.find(route => route.path === location.pathname);
  if (route) loadHTMLTemplate(route.template, "page");
  else document.getElementById("page")!.innerHTML = "<h1>404 Not Found</h1>";
});

navigate(location.pathname);