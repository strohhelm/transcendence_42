async function loadHTMLTemplate(url: string, id:string) {
	const route = "/" + id + url;
	let html: string;
	const response = await fetch(route);
	if (! response.ok)
		html = `<p>${response.status}<p>`;
	else
		html = await response.text();
	document.getElementById(id)!.innerHTML = html;
}


function navigate(path: string, id:string) {
	if (!path)
		return;
	loadHTMLTemplate(path, id);
	console.log(`navigate to: ${path}`);
}

function handleClickLink(e: Event) {
	e.preventDefault();
	const target = e.target as HTMLAnchorElement;
	const route = target.getAttribute("href");
	if (route){
		console.log(`trying to navigate to: ${route}`)
		navigate(route, "page");
		history.pushState({}, "", route);
	}
}

window.addEventListener("popstate", (e: Event) => {
	e.preventDefault();
	if (location.pathname)
		navigate(location.pathname, "page");
	else
		return;
})

window.addEventListener("load", () => {
	navigate(location.pathname.replace(/\/$/, ''), "page");
})

document.querySelectorAll('.spa').forEach(link => {
	link.addEventListener('click', handleClickLink);
  });