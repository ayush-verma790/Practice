import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='max-w-[100%] mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-[2%]'>
        <div className='bg-blue-400 p-[4%] col-span-full lg:col-span-5'>
          Header
        </div>
        
        <div className='bg-blue-400 p-[4%] col-span-full lg:col-span-4 md:row-span-1'>
          Hello 3
        </div>
        <div className='bg-blue-400 p-[4%] col-span-full sm:col-span-1'>
          Hello 4
        </div>
        <div className='bg-blue-400 p-[4%] col-span-full sm:col-span-1'>
          Hello 5
        </div>
        <div className='bg-blue-400 p-[4%] col-span-full sm:col-span-1'>
          Hello 6
        </div>
        <div className='bg-blue-400 p-[4%] col-span-full sm:col-span-1'>
          Hello 7
        </div>
        <div className='bg-blue-400 p-[4%] col-span-full sm:col-span-1'>
          Hello 8
        </div>
      </div>
    </main>
  );
}
