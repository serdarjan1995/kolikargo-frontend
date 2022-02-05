import { useRouteMap } from ".";

function useCreateBreadcrumb(paths) {
  const routeMapping = useRouteMap();

  return paths
    .map((path, i, arr) => ({
      name: routeMapping[path],
      path: arr.slice(0, i + 1).join(""),
    }))
    .filter(({ name }) => Boolean(name));
}

export default useCreateBreadcrumb;
