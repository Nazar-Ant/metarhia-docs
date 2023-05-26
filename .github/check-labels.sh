LANGUAGE_LABELS=(":us: EN" ":ukraine: UK" ":ru: RU")

has_label() {
  [ $(echo $LABELS | jq -rcM ". | index(\"$1\")") != "null" ]
}

if has_label "ready for translation"; then
  for label in "${LANGUAGE_LABELS[@]}"; do
    if ! has_label "$label"; then
      echo "Missing language label: $label"
      exit 1
    fi
  done
elif ! has_label "not translatable"; then
  echo "The PR must at least have one of the following labels: ready for translation or not translatable"
  exit 1
fi
