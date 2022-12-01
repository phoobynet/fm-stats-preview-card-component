import StatsPreview from '@/routes/StatsPreview'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<StatsPreview />}
      />
    </Routes>
  )
}
