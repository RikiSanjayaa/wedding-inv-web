export default function CustomFilledBtn({ buttonText, onClick }) {
  return (
    <button onClick={onClick} type="button" className="text-white bg-sakura-300 hover:bg-sakura-100 focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-sakura-100 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-2.5 text-center me-2 mb-2">
      {buttonText}
    </button>
  )
}