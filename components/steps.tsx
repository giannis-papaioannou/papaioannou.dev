export default function Step({
  refValue,
  displayValue,
  currentStep,
  triggerFunction,
}: {
  refValue: string;
  displayValue: string;
  currentStep: string;
  triggerFunction: () => void;
}) {
  return (
    <>
      <li>
        <a
          href={refValue}
          className={`btn ${currentStep == refValue ? " bg-primary" : ""}`}
          onClick={() => triggerFunction()}
        >
          {displayValue}
        </a>
      </li>
    </>
  );
}
