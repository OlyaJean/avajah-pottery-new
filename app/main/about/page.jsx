import React from 'react'
import profile from '/assets/profile.jpg'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-col gap-5 px-10 tracking-widest'>

<h3 className='text-center mt-10 mb-5  md:text-2xl py-5  rounded-md  bg-slate-300'>Stories from the Studio: My Journey with Clay and Creativity</h3>
<br />
<h3 className=''>A New Chapter Begins</h3>

      
      <hr />
      <Image alt='' src={profile} height={400}  className='m-auto border-8  rounded-lg'/>
      <p className='indent-5'>Hello and welcome to the first entry in my journal! My name is Evelyn, and I’m a mother of two, living right here in Charlotte, NC. Here, I want to share my journey, both as a mom and as a creator, as I dive into a new adventure: ceramics.
<br />
How It All Began.
<br />
It all started on a regular day—between school drop-offs, cleaning up, and working on projects around the house. I’ve always loved art and working with my hands, but between family and other responsibilities, I hadn’t really pursued it. But one evening, after putting the kids to bed, I felt the urge to try something new, something just for myself.
<br />
The next week, I signed up for a local ceramics class. I still remember the feel of the clay under my hands for the first time. It was messy and imperfect, but there was a kind of peace in shaping something from nothing. Every piece felt like a little story, told through each unique shape and texture.
<br />
Turning Passion into Purpose.
<br />
As time went on, I realized how much joy this new hobby brought me. It was more than just a break; it felt like a calling. And so, with encouragement from family and friends, I decided to take a leap. I opened my own little ceramics shop here in Charlotte.
<br />
Now, every piece I make is created with love and a sense of purpose. Each mug, bowl, and vase holds a story—of late-night inspiration, the occasional “help” from my kids, and the dream of sharing my craft with the world.
<br />

<br />
Thank you for being here.  And hope you’ll enjoy following along as my passion for ceramics continues to grow.

</p>
<hr />
    </div>
  )
}

export default page
 