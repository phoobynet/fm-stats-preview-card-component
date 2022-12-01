import desktopUrl from '@/assets/image-header-desktop.jpg'
import StatsList from '@/components/StatsPreview/StatsList'
import StatsListItem from '@/components/StatsPreview/StatsListItem'

export default function StatsPreview() {
  return (
    // Page
    <div className="flex h-screen items-center justify-center">
      {/* Container Card */}
      <div className="grid h-[446px] w-[1110px] grid-cols-[570px_540px] overflow-hidden rounded-xl bg-dark-desaturated-blue text-white">
        {/* Left hand content */}
        <div className="mx-[4.5rem] flex flex-col pt-[4.5rem]">
          <h1 className="text-4xl font-semibold leading-[2.7rem]">
            Get <span className="text-soft-violet">insights</span> that help
            your business grow.
          </h1>
          <p
            className="w-[22rem] pt-[1.6rem] font-medium text-white-75"
            style={{
              lineHeight: '25px',
              fontSize: '15px',
              fontFamily: 'Inter',
            }}
          >
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="w-[21.9rem] pt-[4.5rem]">
            <StatsList>
              <StatsListItem
                amount={'10k+'}
                description={'companies'}
              />
              <StatsListItem
                amount={'314'}
                description={'templates'}
              />
              <StatsListItem
                amount={'12M+'}
                description={'queries'}
              />
            </StatsList>
          </div>
        </div>
        {/* Right hand content */}
        <div className="bg-soft-violet">
          <img
            src={desktopUrl}
            alt=""
            className="h-full w-full object-cover object-right-top opacity-75 mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  )
}
