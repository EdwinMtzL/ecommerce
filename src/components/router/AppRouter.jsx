
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from '../layout/Layaout'

export const AppRouter = () => {
  return (
    <Routes>
    <Route element={ <Layout/>}>
      {routes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />}></Route>
      ))}
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Route>
  </Routes>
  )
}
