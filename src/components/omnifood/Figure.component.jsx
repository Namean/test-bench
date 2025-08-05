function ChairBox() {
  return;
}

function Figure({ props }, children) {
  const { className } = props;
  return (
    <figure className={className}>
      <Image props={figureImageProps} />
    </figure>
  );
}
