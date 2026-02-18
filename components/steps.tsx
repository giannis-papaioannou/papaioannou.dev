export default function Step({
  refValue,
  displayValue,
  currentStep,
  triggerFunction,
  hrBefore,
  hrAfter,
}: {
  refValue: string;
  displayValue: string;
  currentStep: string;
  triggerFunction: () => void;
  hrBefore: boolean;
  hrAfter: boolean;
}) {
  return (
    <>
      <li>
        {hrBefore && <hr />}
        <a
          href={refValue}
          className={`timeline-end timeline-box ${currentStep == refValue ? "bg-primary" : ""}`}
          onClick={() => triggerFunction()}
        >
          {displayValue}
        </a>
        {hrAfter && <hr />}
      </li>
    </>
  );
}
