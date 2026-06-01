export default function LapiAvatar() {
  return (
    <div
      className="
      w-40
      h-40
      rounded-full
      bg-[#F5F2EB]
      border
      border-[#EFE7DE]
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      <img
        src="/logo.png"
        alt="Lapi"
        className="w-28 h-28 object-contain"
      />
    </div>
  );
}