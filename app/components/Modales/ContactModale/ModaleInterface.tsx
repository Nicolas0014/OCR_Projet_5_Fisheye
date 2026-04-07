// Types
import { FormInput } from "@/app/types";

export default function ModaleInterface({
  photographerName,
  formInputs,
  onSubmit,
  onClose,
}: {
  photographerName: string;
  formInputs: FormInput[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen z-30">
      <div
        className="absolute inset-0 left-0 top-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <form
        onSubmit={onSubmit}
        className="relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-167.5 bg-secondary rounded-md p-8 space-y-4"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-6 top-6 cursor-pointer"
          onClick={onClose}
          aria-label="Close modale"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClose();
            }
          }}
        >
          <path
            d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
            fill="white"
          />
        </svg>

        <div>
          <h2 className="text-xxl font-bold mb-0">Contactez-moi</h2>
          <label className="text-xxl font-bold mb-0">{photographerName}</label>
        </div>
        {formInputs.map((input) => (
          <div className="space-y-1" key={input.id}>
            <label className="text-xl" htmlFor={input.id}>
              {input.label}
            </label>
            {input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.id}
                value={input.value}
                className="inputStyle min-h-42.5"
                onChange={(e) => input.setFunction(e.target.value)}
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.id}
                value={input.value}
                className="inputStyle"
                onChange={(e) => input.setFunction(e.target.value)}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
    </div>
  );
}
